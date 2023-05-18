import Header from "@/components/Header";
import InnovationForm from "@/components/InnovationForm";
import styled from "styled-components";
import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";

import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";

export default function InnovationPage({innovations}) {
  return (
    <>
      <Header />
      <InnovationForm />

    </>
  );
}

// export async function getServerSideProps() {
//     await mongooseConnect();
//     const innovations = await Product.find({}, null, {sort:{'_id':-1}});
//     return {
//       props:{
//         products: JSON.parse(JSON.stringify(products)),
//       }
//     };
//   }