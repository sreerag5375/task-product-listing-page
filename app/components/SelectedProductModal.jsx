import { Modal, BlockStack, Text, Divider } from "@shopify/polaris";
import React from "react";

export const SelectedProductModal = ({ active, handleClose, product }) => {
  return (
    <div style={{ height: "500px" }}>
      <Modal
        open={active}
        onClose={handleClose}
        title={
          <Text variant="headingLg" fontWeight="regular">
            {product?.title}
          </Text>
        }
      >
        <Modal.Section>
          <BlockStack gap="500">
            {/* <Thumbnail source={product?.image} alt={product?.title}/> */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={product?.image}
                alt={product?.title}
                style={{
                  width: "240px",
                  height: "280px",
                  objectFit: "contain",
                }}
              />
            </div>

            <Divider borderColor="border-inverse" />
            <Text variant="headingXl" fontWeight="medium">
              Description:
            </Text>

            <Text variant="bodyLg" as="h4" fontWeight="regular">
              {product?.description}
            </Text>
            <Divider borderColor="border-inverse" />

            <BlockStack gap="100">
              <Text variant="headingXl" fontWeight="medium">
                Rating:
              </Text>
              <Text variant="headingSm" fontWeight="medium">
                <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
                {product?.rating?.rate}
              </Text>
              <Text variant="headingSm" fontWeight="medium">
                <span style={{ fontWeight: "bold" }}>Ratedby:</span>{" "}
                {product?.rating?.count}
              </Text>
            </BlockStack>
          </BlockStack>
        </Modal.Section>
      </Modal>
    </div>
  );
};
