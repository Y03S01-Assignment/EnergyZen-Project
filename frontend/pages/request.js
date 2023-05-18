import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";
//import {Product} from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import RequestForm from "@/components/RequestForm";


export default function RequestPage({request}) {
  return (
    <>
      <Header />
      <Center>

        <RequestForm/>
      </Center>
    </>
  );
}