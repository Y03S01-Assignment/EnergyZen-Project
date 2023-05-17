import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,

}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);

  const router = useRouter();

  async function saveService(ev) {
    ev.preventDefault();
    const data = {
      title,
      description,
      price,
      
    };
    if (_id) {
      //update
      await axios.put("/api/products", { ...data, _id });
    } else {
      //create
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/products");
  }
//   async function uploadImages(ev) {
//     const files = ev.target?.files;
//     if (files?.length > 0) {
//       setIsUploading(true);
//       const data = new FormData();
//       for (const file of files) {
//         data.append("file", file);
//       }
//       const res = await axios.post("/api/upload", data);
//       setImages((oldImages) => {
//         return [...oldImages, ...res.data.links];
//       });
//       setIsUploading(false);
//     }
//   }
//   function updateImagesOrder(images) {
//     setImages(images);
//   }
  function setProductProp(propName, value) {
    setProductProperties((prev) => {
      const newProductProps = { ...prev };
      newProductProps[propName] = value;
      return newProductProps;
    });
  }

  return (
    <form onSubmit={saveService}>
      <label>Service Type</label>
      <input
        type="text"
        placeholder="Servie Type"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />

      <div className="mb-2 flex flex-wrap gap-1"></div>
      <label>Description</label>
      <textarea
        placeholder="Service description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <label>Rental (in LKR)</label>
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
      />
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
