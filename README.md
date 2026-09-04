# Cookbook

CRUD-application for managing and sharing recipes.

## Built with

- Node
- Express
- MongoDB (Mongoose)
- EJS

___

## ER diagram

```mermaid
erDiagram
    User ||--o{ Recipe : saves
    Recipe ||--o{ RecipeIngredient : contains
    Ingredient ||--o{ RecipeIngredient : "used in"
    User {
        string name
        string password
    }
    Recipe {
        string title
        string author
        string body
    }
    RecipeIngredient {
        number amount
    }
    Ingredient {
        string name
        number calorie
        number fat
        number carbohydrate
        number protein
}
```

- **All** nutritional values are per 100 g. Amounts are in **grams**.

___
