export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
		{
			name: "brand",
			title: "Brand",
			type: "string",
		},
		{
			name: "price",
			title: "Price",
			type: "number",
		},
		{
			name: "age",
			title: "Age",
			type: "number",
		},
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
  ],
};
