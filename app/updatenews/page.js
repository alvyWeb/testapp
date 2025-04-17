"use client";
import { useState, useEffect } from "react";
import { auth, db } from "../../utils/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import "./updatenews.scss"; // Rename your SCSS file to match

import ProtectedRoute from "@/components/common/ProtectedRoute";

const UploadNews = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    image: "",
    time: "",
    comment: "",
    category: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result);
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Login required");

    try {
      const newsId = Date.now().toString(); // You can use UUID instead
      await setDoc(doc(db, "news", newsId), {
        ...formData,
        author: user.uid,
        createdAt: serverTimestamp(),
      });
      alert("Update");
      setFormData({ title: "", description: "", date: "", time: "", comment: "",image: "", category: "" });
      setImagePreview("");
    } catch (err) {
      console.error("Error uploading news:", err);
    //   alert("שגיאה בהעלאת חדשות");
    }
  };

  return (
    <ProtectedRoute>
      <form onSubmit={handleSubmit}>
        <div className="uploadnews_container">
          <div className="header">
            <h2>העלה חדשות</h2>
          </div>

          <div className="form_group">
            <label className="label_input">Title</label>
            <input
              type="text"
              name="title"
              onChange={handleInput}
              placeholder="הכנס כותרת..."
            />
          </div>

          <div className="form_group">
            <label className="label_input">Description</label>
            <textarea
              name="description"
              onChange={handleInput}
              placeholder="הכנס תיאור..."
            ></textarea>
          </div>

          <div className="form_group">
            <label className="label_input">Category</label>
            <input
              type="text"
              name="category"
              onChange={handleInput}
              placeholder="שם הקטגוריה"
            />
          </div>

          <div className="form_group">
            <label className="label_input">Date</label>
            <input
              type="date"
              name="date"
              onChange={handleInput}
            />
          </div>

          <div className="form_group">
            <label className="label_input">Time</label>
            <input
              type="time"
              name="time"
              onChange={handleInput}
            />
          </div>

          <div className="form_group">
            <label className="label_input">Comment</label>
            <input
              type="text"
              name="comment"
              onChange={handleInput}
            />
          </div>

          <div className="form_group">
            <label className="label_input">תמונה</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="News Preview"
                style={{ width: "300px", marginTop: "10px" }}
              />
            )}
          </div>

          <button type="submit" className="submit_button">
            שמור חדשות
          </button>
        </div>
      </form>
    </ProtectedRoute>
  );
};

export default UploadNews;
