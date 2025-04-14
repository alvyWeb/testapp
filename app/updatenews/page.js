import { useState } from "react";
import { db } from "../../utils/firebase";
import { storage } from "../../utils/firebase"; // add this
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const UploadNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!imageFile) return alert("Please select an image.");

    setUploading(true);

    try {
      // 1. Upload image to storage
      const imageRef = ref(storage, `newsImages/${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);

      // 2. Save document to Firestore
      await addDoc(collection(db, "news"), {
        title,
        description,
        url: link,
        image: imageUrl,
        source: "אדמין",
        message: "0 תגובות",
        publishedAt: new Date().toISOString(),
      });

      alert("News uploaded successfully!");
      setTitle("");
      setDescription("");
      setLink("");
      setImageFile(null);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input type="text" placeholder="Link URL" value={link} onChange={e => setLink(e.target.value)} required />
      <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} required />
      <button type="submit" disabled={uploading}>{uploading ? "Uploading..." : "Upload News"}</button>
    </form>
  );
};

export default UploadNews;
