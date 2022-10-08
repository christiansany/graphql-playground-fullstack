
      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Connection": [
      "ProductRatingCommentConnection",
      "ProductRatingConnection"
    ],
    "Contribution": [
      "ProductRating",
      "ProductRatingComment"
    ],
    "DisplayableError": [
      "UserError"
    ],
    "Edge": [
      "ProductRatingCommentEdge",
      "ProductRatingEdge"
    ],
    "Likeable": [
      "Brand",
      "Product"
    ],
    "Node": [
      "Brand",
      "Product",
      "ProductRating",
      "ProductRatingComment",
      "User"
    ],
    "Timestamps": [
      "ProductRating",
      "ProductRatingComment"
    ],
    "Voteable": [
      "Brand",
      "Product"
    ]
  }
};
      export default result;
    