import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const POST_CATEGORIES = [
    "Agriculture",
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!title || !description) {
      setErrorMessage("Title and description are required");
      return;
    }
  };

  return (
    <section className="create-post">
      <div className="container">
        <h2 className="aln-txt">Create Post</h2>
        {errorMessage && <p className="form__error-message">{errorMessage}</p>}
        {successMessage && (
          <p className="form__success-message">{successMessage}</p>
        )}
        <form className="form create-post__form" onSubmit={handleSubmit}>
          <input
            className="input-style"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            className="input-style"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {POST_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="image/png, image/jpg, image/jpeg"
          />
          <button type="submit" className="btn primary">
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
