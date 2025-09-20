import man from "../public/clapbac-reviews/man.jpg";
import owner from "../public/clapbac-reviews/owner.png";
export const reviews = [
  {
    id: 1,
    reviewer: {
      name: "Nancy B.",
      location: "Los Angeles, CA",
      rating: 2,
      date: "2/10/25",
      experienceDate: "2/9/25",
    },
    replies: [
      {
        id: 100,
        reply: "CLAPBAC FROM...",
        name: "Pete Wells",
        owner: ", Owner",
        role: "Reviewer",
        date: "2/11/25",
        type: "response",
        ratings: 3.5,
        ownerside: "Clapbac Rating of this Review",
        content:
          "Nunc arcu dui, bibendum vel semper in, rhoncus eget nulla. Nullam tempor faucibus ornare. Aliquam vestibulum pharetra est nec fringilla. Nulla congue sem a massa gravida viverra. Sed quis mi ut risus feugiat accumsan. In in gravida elit, in vestibulum dolor. Morbi efficitur viverra dui, quis imperdiet justo vestibulum vel. In tempor auctor bibendum.",
        image: owner,
      },

      {
        id: 101,
        subName: "Nancy B.",
        role: "Owner",
        date: "2/10/25",
        content:
          "Nunc arcu dui, bibendum vel semper in, rhoncus eget nulla. Nullam tempor faucibus ornare. Aliquam vestibulum pharetra est nec fringilla. Nulla congue sem a massa gravida viverra. Sed quis mi ut risus feugiat accumsan. In in gravida elit, in vestibulum dolor. Morbi efficitur viverra dui, quis imperdiet justo vestibulum vel. In tempor auctor bibendum.",
      },
      {
        id: 102,
        reply: "CLAPBAC FROM...",
        name: "Pete Wells, Owner",
        owner: ", Owner",
        subName: "Arabica Coffee",
        role: "Reviewer",
        date: "2/11/25",
        type: "response",
        content:
          "Maecenas gravida sem vitae nulla porta elementum. Duis blandit, est non malesuada euismod, urna neque sollicitudin sem, et mattis risus orci at nulla. Maecenas vitae nulla a orci lobortis mollis. Praesent interdum lectus ultricies magna accumsan, at pulvinar leo tempus. Phasellus efficitur magna nec mattis condimentum. Sed dapibus, lorem vel egestas porta, dui enim consequat nulla, a ullamcorper nisi arcu vel ligula. Nunc condimentum tempor vehicula.",
        image: owner,
      },
    ],
  },
  // Add more review threads here if needed
];
