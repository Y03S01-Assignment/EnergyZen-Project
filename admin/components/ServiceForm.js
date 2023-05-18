import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
  _id,
  stype: existingTitle,
  description: existingDescription,
  rental: existingPrice,

}) {
  const [stype, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [rental, setPrice] = useState(existingPrice || "");
  const [goToServices, setGoToServices] = useState(false);

  const router = useRouter();

  async function saveService(ev) {
    ev.preventDefault();
    const data = {
      stype,
      description,
      rental,
      
    };
    if (_id) {
      //update
      await axios.put("/api/products", { ...data, _id });
    } else {
      //create
      await axios.post("/api/products", data);
    }
    setGoToServices(true);
  }
  if (goToServices) {
    router.push("/services");
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
  function setServiceProp(propName, value) {
    setServiceProperties((prev) => {
      const newServiceProps = { ...prev };
      newServiceProps[propName] = value;
      return newServiceProps;
    });
  }

  return (
    <form onSubmit={saveService}>
      <label>Service Type</label>
      <input
        type="text"
        placeholder="Servie Type"
        value={stype}
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
        value={rental}
        onChange={(ev) => setPrice(ev.target.value)}
      />
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
