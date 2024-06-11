import { Modal, Button, BlockStack, Text } from "@shopify/polaris";
import React from "react";

export const SelectedProductModal = ({ active, handleClose, product }) => {
  return (
    <div style={{ height: "500px" }}>
      <Modal
        open={active}
        onClose={handleClose}
        title={product?.title}
        primaryAction={{
          content: "Close",
          onAction: handleClose,
        }}
      >
        <Modal.Section>
          <BlockStack>
            <div className="selectedProduct">
              <img
                src={product?.image}
                alt={product?.title}
                style={{
                  width: "260px",
                  height: "300px",
                  objectFit: "contain",
                }}
              />

              <Text variant="headingLg" as="h4">
                {product?.title}
              </Text>
              <Text variant="headingMd" as="h4" fontWeight="regular">
                {product?.description}
              </Text>

              <p>
                <strong>Price:</strong> ${product?.price}
              </p>
              <p>
                <strong>Rating:</strong> ⭐{product?.rating?.rate}/
                {product?.rating.count}
              </p>
            </div>
          </BlockStack>
        </Modal.Section>
      </Modal>
    </div>
  );
};
