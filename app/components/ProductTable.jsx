import { Card, IndexTable, Text } from "@shopify/polaris";
import React from "react";

export const ProductTable = ({ products, onRowClick }) => {
  const rowMarkup = products
    ? products.map(
        ({ id, image, title, category, rating, price, description }, index) => (
          <IndexTable.Row
            id={id.toString()}
            key={id}
            position={index}
            onClick={() =>
              onRowClick({
                id,
                image,
                title,
                category,
                rating,
                price,
                description,
              })
            }
          >
            <IndexTable.Cell>
              <img
                src={image}
                alt={title}
                style={{
                  width: "100px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />
            </IndexTable.Cell>
            <IndexTable.Cell>
              <Text variant="bodyXl" fontWeight="bold" as="span">
                {title}
              </Text>
            </IndexTable.Cell>
            <IndexTable.Cell>{category}</IndexTable.Cell>
            <IndexTable.Cell>{rating.rate}⭐</IndexTable.Cell>
            <IndexTable.Cell>
              <Text as="span" numeric fontWeight="semibold">
                ${price}
              </Text>
            </IndexTable.Cell>
          </IndexTable.Row>
        )
      )
    : [];

  return (
    <div className="product-table">
      <Card>
        <IndexTable
          itemCount={products ? products.length : 0}
          headings={[
            { title: "" },
            {
              title: (
                <Text variant="headingLg" as="h4">
                  Product
                </Text>
              ),
            },
            {
              title: (
                <Text variant="headingLg" as="h4">
                  Category
                </Text>
              ),
            },
            {
              title: (
                <Text variant="headingLg" as="h4">
                  Rating
                </Text>
              ),
            },
            {
              title: (
                <Text variant="headingLg" as="h4">
                  Price
                </Text>
              ),
            },
          ]}
          selectable={false}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </div>
  );
};
