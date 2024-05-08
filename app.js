var employeeData = [
  {
    image: "./public/user1.jpg",
    name: "Ankitha",
    post: "Have We Met? I am Ankitha. Today is my birthday!",
    likes: 4,
    likedby: "Raja,Hari,Geetha,John",
    comments: [
      { comment: "Happy Birthday!", commentedby: "Raja" },
      { comment: "Wishing you a year ahead filled with happiness and success! Day to shine! Cheers to another year!", commentedby: "David" },
      { comment: "Happy Birthday! Have a great year ahead", commentedby: "Geetha" },
    ],
  },
  {
    image: "./public/user2.jpg",
    name: "Jane",
    post: "Hello, I'm Jane. Today is my birthday!",
    likes: 5,
    likedby: "Raja,Hari,Geetha,Ankitha,Dave",
    comments: [
      { comment: "Happy Birthday, Jane!", commentedby: "John" },
      { comment: "Have a fantastic day, Jane!", commentedby: "Hari" },
      { comment: "Best wishes on your special day, Jane!", commentedby: "Geetha" },
    ],
  },
  {
    image: "./public/user3.jpg",
    name: "John",
    post: "Hi, I'm John. Celebrating another year of life today!",
    likes: 12,
    likedby: "Jane,Hari,Geetha,Ankitha,David,Emma,Frank,Gina,Henry,Irene,Jack,Kate",
    comments: [
      { comment: "Happy Birthday, John!", commentedby: "Jane" },
      { comment: "Enjoy your day, John!", commentedby: "Hari" },
      { comment: "Wishing you a joyous birthday, John!", commentedby: "Geetha" },
      { comment: "Have a great birthday, John!", commentedby: "Ankitha" },
      { comment: "Happy Birthday, John!", commentedby: "David" },
      { comment: "Best wishes, John!", commentedby: "Emma" },
      { comment: "Enjoy your special day, John!", commentedby: "Frank" },
      { comment: "Have a wonderful birthday, John!", commentedby: "Gina" },
      { comment: "Happy Birthday, John!", commentedby: "Henry" },
      { comment: "Best wishes on your birthday, John!", commentedby: "Irene" },
    ],
  },
  {
    image: "./public/user4.jpg",
    name: "Dave",
    post: "Hey, I'm Dave. It's my birthday today!",
    likes: 0,
    likedby: "",
    comments: [],
  },
  {
    image: "./public/user5.jpg",
    name: "Smith",
    post: "Hi there, I'm Smith. Guess what? It's my birthday today!",
    likes: 5,
    likedby: "John,Raja,Hari,Ankitha,David",
    comments: [
      { comment: "Happy Birthday, Smith!", commentedby: "John" },
      { comment: "Have a wonderful day, Smith!", commentedby: "Raja" },
      { comment: "Best wishes on your special day, Smith!", commentedby: "Hari" },
      { comment: "Enjoy your birthday, Smith!", commentedby: "Ankitha" },
    ],
  },
  {
    image: "./public/user6.jpg",
    name: "David",
    post: "Hey, I'm David. Celebrating my birthday today!",
    likes: 3,
    likedby: "John,Raja,Hari",
    comments: [
      { comment: "Happy Birthday, David!", commentedby: "John" },
      { comment: "Enjoy your day, David!", commentedby: "Raja" },
      { comment: "Wishing you a joyous birthday, David!", commentedby: "Hari" },
    ],
  },
];

let feed = document.getElementById("feed");
let likedPosts = {};

employeeData.forEach(function (employee) {
  let post = document.createElement("section");
  post.className = "postBlock";

  // User Data
  let userData = document.createElement("div");
  userData.className = "userData";
  userData.innerHTML =
    '<img src="' + employee.image + '" alt="' + employee.name + '" class="userImage" width="40" height="40">' + "<h4>" + employee.name + "</h4>";
  post.appendChild(userData);

  // Post Content
  let postContent = document.createElement("div");
  postContent.className = "postContent";
  postContent.innerHTML =
    '<p class="postText">' + employee.post + "</p>" + '<div class="likesCounter"><span id="likes_' + employee.name + '">' + employee.likes + "</span> Likes</>";
  post.appendChild(postContent);

  // Like Button
  let actionBar = document.createElement("div");
  actionBar.className = "actionBar";
  actionBar.innerHTML =
    "<button class='likeButton' id='likeButton_" + employee.name + "' type='button' onclick=\"incrementLike('" + employee.name + "')\">&#x2661;</button>";
  post.append(actionBar);

  // Comment Section
  let commentsSection = document.createElement("div");
  commentsSection.className = "commentsSection";
  commentsSection.innerHTML = '<div id="comments_' + employee.name + '"></div>';

  let commentsInput = document.createElement("div");
  commentsInput.className = "commentsInput";
  commentsInput.innerHTML =
    '<input id="commentInput_' +
    employee.name +
    '" type="text" placeholder="Add a comment...">' +
    "<button onclick=\"addComment('" +
    employee.name +
    "')\">Comment</button>";

  commentsSection.appendChild(commentsInput);
  post.appendChild(commentsSection);

  // Adding the post section to feed
  feed.appendChild(post);

  // Adding all the comments from 'comments[]'
  var commentsDiv = document.getElementById("comments_" + employee.name);
  employee.comments.forEach(function (comment) {
    var commentElement = document.createElement("p");
    commentElement.innerHTML = '<span class="commentAuthor">' + comment.commentedby + " </span>" + comment.comment;
    commentsDiv.appendChild(commentElement);
  });
});

// Increase like count on click
function incrementLike(name) {
  var likes = document.getElementById("likes_" + name);
  var likesButton = document.getElementById("likeButton_" + name);
  // If the post has not been liked yet, like it
  if (!likedPosts[name]) {
    likes.textContent = parseInt(likes.textContent) + 1;
    likedPosts[name] = true;
    likesButton.classList.add("postLiked");
  }
  // If the post has been liked, unlike it
  else {
    likes.textContent = parseInt(likes.textContent) - 1;
    likedPosts[name] = false;
    likesButton.classList.remove("postLiked");
  }
}

// Add new comments to the UI
function addComment(name) {
  let commSection = document.getElementsByClassName("commentsSection");
  var input = document.getElementById("commentInput_" + name);
  var comments = document.getElementById("comments_" + name);
  var comment = document.createElement("p");
  if (input.value !== "") {
    comment.innerHTML = '<span class="commentAuthor">You </span>' + input.value;
    comments.appendChild(comment);
    input.value = "";
  }
}
