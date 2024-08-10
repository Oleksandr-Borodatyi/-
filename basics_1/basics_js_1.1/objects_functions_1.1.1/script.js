let arrayProducts = [null]
let arrayParametersObjectsProducts = [
    "ID",
    "name",
    "description",
    "price",
    "brand",
    "colors",
    "activeColors",
    "quantity",
    "date",
    "reviews",
    "images",
]

let arrayParametersReviewsProducts = [
    "ID",
    "author",
    "date", 
    "comment",
    "rating",
]

let arrayAssociate = [
    'service', 
    'price', 
    'value', 
    'quality',
]

let arrayAdditionalMethods = [
    "getReviewByID",
    "getImage",
    "addSize",
    "deleteSize",
    "addReview",
    "deleteReview",
    "getAverageRating",
]

function getters() {
    for (let a = 0; a < arrayProducts.length; a++) {
        for (let b = 0; b < arrayParametersObjectsProducts.length; b++) {
            let parameter = arrayParametersObjectsProducts[b];
            arrayProducts[a]["get" + parameter] = () => arrayProducts[a][parameter];
            return arrayProducts[a][parameter];
        }
    }
}

function setters() {
    for (let a = 0; a < arrayProducts.length; a++) {
        for (let b = 0; b < arrayParametersObjectsProducts.length; b++) {
            let parameter = arrayParametersObjectsProducts[b];
            arrayProducts[a]["set" + parameter] = (value) => (arrayProducts[a][parameter] = value)
            return arrayProducts[a][parameter];
        }
    }
}

/*====================================================================================================================================

function additionalMethods() {
    for (let a = 0; a < arrayProducts.length; a++) {
        for (let b = 0; b < arrayAdditionalMethods.length; b++) {
            let parameter = arrayAdditionalMethods[b];
            arrayProducts[a][parameter] = (value) => (arrayProducts[a][parameter] = value)
            return arrayProducts[a][parameter];
        }
    }
}

====================================================================================================================================*/

function AddProduct() {
    for (let a = 0; a < arrayProducts.length; a++) {
       if(arrayProducts[a] === null) {
            arrayProducts[a]={}
        for (let b = 0; b < arrayParametersObjectsProducts.length; b++) {
            let parameterName = arrayParametersObjectsProducts[b]
            if (arrayParametersObjectsProducts[b] !== "reviews") {
                arrayProducts[a][parameterName]= prompt(arrayParametersObjectsProducts[b] + ":")
            }else{
                arrayProducts[a][parameterName]= [null]
            }
        }
       } 
    }
    arrayProducts.push(null);
}

function deleteTheProduct() {
    let nameIDDeleteProduct = prompt("Name or ID")
    for (let a= 0; a < arrayProducts.length; a++) {
        if (nameIDDeleteProduct == arrayProducts[a].name || nameIDDeleteProduct == arrayProducts[a].ID) {
            arrayProducts.splice(a, 1);
            a--;
        }
    }
}

function addReviews() {
    let idProductForReviews = prompt("ID Product");
    for (let a = 0; a < arrayProducts.length; a++) {
        if (arrayProducts[a].ID == idProductForReviews) {
            let newReview = {};
            for (let b = 0; b < arrayParametersReviewsProducts.length; b++) {
                let parameter = arrayParametersReviewsProducts[b];
                if (parameter !== "rating") {
                    newReview[parameter] = prompt(parameter + ":");
                } else {
                    newReview.rating = [];
                    for (let c = 0; c < arrayAssociate.length; c++) {
                        newReview.rating[c] = prompt("Rating (" + arrayAssociate[c] + "):");
                    }
                }
            }
            arrayProducts[a].reviews.push(newReview);
        }
    }
}

function deleteReviews() {
    let reviewIdDelete = prompt("Review ID for delete:")
    let reviewFound = false;
    for (let a = 0; a < arrayProducts.length; a++) {
        if (arrayProducts[a].reviews && arrayProducts[a].reviews.length > 0) {
            for (let b = 0; b < arrayProducts[a].reviews.length; b++) {
                if (reviewIdDelete === arrayProducts[a].reviews[b].ID) {
                    arrayProducts[a].reviews.splice(b, 1);
                    reviewFound = true;
                    break;
                }
            }
        }
        if(reviewFound === true) {
            break;
        }
    }

}

/*================================================================================================================================*/

function searchProduct() {
    let searchProductInProducts = alert("Name or ID");
    let arrayOfFoundProducts =[];
    let arrayOfSearchLetters = [];
    for(let a = 0; a < searchProductInProducts.length; a++) {
        
    }
    for (let products in arrayProducts) {

    }
}


function sortingProducts() {

}

/*================================================================================================================================*/