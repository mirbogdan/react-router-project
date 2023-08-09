import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  deleteProduct,
  retrieveProduct,
  updateProduct,
} from "./ProductsService";

const ProductEdit = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    id: "",
    name: "",
    price: 0,
    description: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== undefined) {
      (async () => {
        try {
          const product = await retrieveProduct(id);
          setForm(product);
        } catch (err) {
          console.log(err);
          navigate("/admin");
        }
      })();
    } else {
      setForm({
        id: "",
        name: "",
        price: 0,
        description: "",
      });
    }
  }, [id]);

  const updateField = ({ name, value }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCreate = async () => {
    try {
      const { id } = await createProduct(form);
      alert(`Created ${form.name}`);
      navigate(`/admin/${id}`);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateProduct(form);
      alert(`Updated ${form.name}`);
      navigate(`/admin`);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(form.id);
      alert(`Delete ${form.name}`);
      navigate(`/admin`);
    } catch (e) {
      console.warn(e);
      navigate(`/admin`);
    }
  };

  if (form === null) {
    return <div>Loading...</div>;
  }

  return (
    <form className="ProductEdit">
      <input
        type="text"
        name="id"
        placeholder="ID"
        className="ProductEdit-Input"
        value={form.id}
        onChange={({ target }) => updateField(target)}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="ProductEdit-Input"
        value={form.name}
        onChange={({ target }) => updateField(target)}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        className="ProductEdit-Input"
        value={form.price}
        onChange={({ target }) =>
          updateField({ name: target.name, value: parseInt(target.value, 10) })
        }
      />
      <textarea
        name="description"
        placeholder="Description"
        className="ProductEdit-Input ProductEdit-Textarea"
        value={form.description}
        onChange={({ target }) => updateField(target)}
      />

      <button
        type="button"
        className="ProductEdit-Button"
        onClick={handleCreate}
      >
        Create
      </button>

      <button
        type="button"
        className="ProductEdit-Button"
        onClick={handleUpdate}
      >
        Update
      </button>

      <button
        type="button"
        className="ProductEdit-Button"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        type="button"
        className="ProductEdit-Button"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </form>
  );
};

export default ProductEdit;
