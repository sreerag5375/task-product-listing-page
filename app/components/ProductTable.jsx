import { Card, IndexTable, Page, Text, Thumbnail } from "@shopify/polaris";
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
              <Thumbnail source={image} alt={title} size="medium" />
            </IndexTable.Cell>
            <IndexTable.Cell>
              <Text variant="bodyLg" fontWeight="medium" as="span">
                {title.length > 20 ? `${title.substring(0, 50)}...` : title}
              </Text>
            </IndexTable.Cell>
            <IndexTable.Cell>
              <Text variant="bodyLg">{category}</Text>
            </IndexTable.Cell>
            <IndexTable.Cell>
              <Text variant="bodyLg">{rating.rate}⭐</Text>
            </IndexTable.Cell>
            <IndexTable.Cell>
              <Text variant="bodyLg" fontWeight="semibold">
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
                <Text variant="headingMd" as="h4">
                  Product
                </Text>
              ),
            },
            {
              title: (
                <Text variant="headingMd" as="h4">
                  Category
                </Text>
              ),
            },
            {
              title: (
                <Text variant="headingMd" as="h4">
                  Rating
                </Text>
              ),
            },
            {
              title: (
                <Text variant="headingMd" as="h4">
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
