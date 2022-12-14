import {gql} from "@apollo/client";

export const allProductQuery =
	gql`query allProduct {
		allProduct{
      _id
      image {_key
      _type
      asset {
        _id
        _createdAt
				_updatedAt
				_rev
				_key
				originalFilename
        label
        title
        description
        altText
        sha1hash
        extension
        mimeType
        size
        assetId
        uploadId
        path
        url
        metadata {
          _key
          _type
          dimensions {
            _key
            _type
            height
            width
            aspectRatio
          }
          lqip
          blurHash
        }
        source {
          _key
          _type
          name
          id
          url
        }
      }}
      brand
      price
      age
      slug {
        _key
				_type
				current
      }
      details
    }
}`
