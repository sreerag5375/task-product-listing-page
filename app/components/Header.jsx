import { Text, InlineGrid, Button } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

export const Header = () => {
  return (
    <div className="header">
      <Text variant="headingXl" as="h3" fontWeight="medium">
        Products
      </Text>
      <div className="nav-links">
        <InlineGrid columns={3} alignItems="center">
          <Text variant="headingMd" as="h6" fontWeight="medium">
            Export
          </Text>

          <Text variant="headingMd" as="h6" fontWeight="medium">
            Import
          </Text>

          <Button size="large" variant="primary" id="add-product-btn">
            <Text variant="headingMd" as="h6" fontWeight="medium">
              Add Product
            </Text>
          </Button>
        </InlineGrid>
      </div>
    </div>
  );
};

// import React from "react";
// import { Page, Card, Button, ButtonGroup, Text } from "@shopify/polaris";
// import "@shopify/polaris/build/esm/styles.css";

// export const Header = () => {
//   return (
//     <Page title="Products">
//       <Card>
//         <Card.Section>
//           <Text variant="heading2xl" as="h1">
//             Products
//           </Text>
//         </Card.Section>
//         <Card.Section>
//           <ButtonGroup>
//             <Button>Export</Button>
//             <Button>Import</Button>
//             <Button primary>Add Product</Button>
//           </ButtonGroup>
//         </Card.Section>
//       </Card>
//     </Page>
//   );
// };
