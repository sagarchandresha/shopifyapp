import { Card, Page, Layout, Button, MediaCard } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import { useState } from "react";

export default function HomePage() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const ProductInfo = ({ title, description, images }) => {
    // const desc = <div dangerouslySetInnerHTML={{__html: description}} />
    // console.log(images);
    return (
      <MediaCard
        title={title}
        description={<div dangerouslySetInnerHTML={{ __html: description }} />}
      >
        <img
          alt=""
          width="100%"
          height="300px"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            margin: "auto",
          }}
          src={images[0].originalSrc}
        />
      </MediaCard>
    );
  };
  const handleSelection = (resource) => {
    const selectedProduct = resource.selection[0];
    console.log(selectedProduct.images);
    setShow(false);
    setImages(selectedProduct.images);
    setTitle(selectedProduct.title);
    setDescription(selectedProduct.descriptionHtml);
  };
  return (
    <Page fullWidth>
      <TitleBar title="Hopiant Sample App" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Button onClick={() => setShow(true)} style={{ width: "100%" }}>
            Add product
          </Button>
        </Layout.Section>
        <ResourcePicker
          resourceType="Product"
          open={show}
          onCancel={() => setShow(false)}
          onSelection={handleSelection}
          selectMultiple={false}
        />
        {title != "" && (
          <ProductInfo
            title={title}
            description={description}
            images={images}
          />
        )}
      </Layout>
    </Page>
  );
}
