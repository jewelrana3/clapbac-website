import man from "../public/clapbac-reviews/man.jpg";
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
        id: 101,
        reply: "Juyel",
        recever: "owner",
        role: "Owner",
        business: "Arabica Coffee",
        date: "2/10/25",
        rating: 4,
        type: "clapback",
        content:
          "Nunc arcu dui, bibendum vel semper in, rhoncus eget nulla. Nullam tempor faucibus ornare...",
        ownerside: "Clapbac Rating of this Review",
        ratings: 3.5,
        image: man,
      },
      {
        id: 102,
        reply: "From Response",
        role: "Reviewer",
        date: "2/11/25",
        type: "response",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu erat lacinia...",
      },
      // {
      //   id: 103,
      //   reply: "Juyel",
      //   recever: "Pete Wells",
      //   role: "Owner",
      //   business: "Arabica Coffee",
      //   date: "2/11/25",
      //   type: "clapback",
      //   content:
      //     "Maecenas gravida sem vitae nulla porta elementum. Duis blandit, est non malesuada euismod...",
      //   image: owner,
      // },
    ],
  },
  // Add more review threads here if needed
];
