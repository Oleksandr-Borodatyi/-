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

/*====================================================================================================================================*/

const additionalMethods = {
    getReviewByID: function(reviewID) {
        return this.reviews.find(review => review.ID === reviewID);
    },
    addReview: function(newReview) {
        this.reviews.push(newReview);
    },
    deleteReview: function(reviewID) {
        this.reviews = this.reviews.filter(review => review.ID !== reviewID);
    },
    getAverageRating: function() {
        let totalRating = 0;
        let ratingCount = 0;
        for (let review of this.reviews) {
            totalRating += review.rating.reduce((sum, rate) => sum + rate, 0);
            ratingCount += review.rating.length;
        }
        return ratingCount > 0 ? totalRating / ratingCount : 0;
    }
};

function addAdditionalMethods() {
    for (let a = 0; a < arrayProducts.length; a++) {
        for (let methodName in additionalMethods) {
            arrayProducts[a][methodName] = additionalMethods[methodName];
        }
    }
}

/*====================================================================================================================================*/

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

function searchProduct() {
    function searchProductsByKeyword(keyword) {
        keyword = keyword.toLowerCase();
        return arrayProducts.filter(product => {
            return (
                product.name.toLowerCase().includes(keyword) ||
                product.description.toLowerCase().includes(keyword)
            );
        });
    }
    let keyword = prompt("Product name or keyword:");
    let results = searchProductsByKeyword(keyword);
    console.log(results);
}

/*================================================================================================================================*/

function sortingProducts() {
    let criterion = prompt("Sorting criterion: 'price', 'name' or 'ID'");
    
    function sortProducts(criterion) {
        return arrayProducts.sort((a, b) => {
            if (criterion === "price") {
                return a.price - b.price; 
            } else if (criterion === "name") {
                return a.name.localeCompare(b.name); 
            } else if (criterion === "ID") {
                return a.ID - b.ID;
            }
        });
    }
    console.log(sortProducts(criterion)); 
}

/*================================================================================================================================*/
