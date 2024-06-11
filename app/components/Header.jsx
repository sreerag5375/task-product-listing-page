import React from "react";
import { Text, InlineGrid, Button } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

export const Header = () => {
  return (
    <div className="header">
      <Text variant="heading2xl" as="h2">
        Products
      </Text>
      <div className="nav-links">
        <InlineGrid columns={3} alignItems="center">
          <Text variant="headingLg" as="h6">
            Export
          </Text>
          <Text variant="headingLg" as="h6">
            Import
          </Text>
          <Button size="large" id="add-product">
            <Text variant="headingLg">Add Product</Text>
          </Button>
        </InlineGrid>
      </div>
    </div>
  );
};
