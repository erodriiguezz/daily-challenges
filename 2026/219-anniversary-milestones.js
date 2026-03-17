// Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

// Years Married	Milestone
// 1	            "Paper"
// 5	            "Wood"
// 10	            "Tin"
// 25	            "Silver"
// 40	            "Ruby"
// 50	            "Gold"
// 60	            "Diamond"
// 70	            "Platinum"

// If they haven't reached the first milestone, return "Newlyweds".

// Tests:
// 1. getMilestone(0) should return "Newlyweds".
// 2. getMilestone(1) should return "Paper".
// 3. getMilestone(8) should return "Wood".
// 4. getMilestone(10) should return "Tin".
// 5. getMilestone(26) should return "Silver".
// 6. getMilestone(45) should return "Ruby".
// 7. getMilestone(50) should return "Gold".
// 8. getMilestone(64) should return "Diamond".
// 9. getMilestone(71) should return "Platinum".

function getMilestone(years) {
  // get years
  let target = years;
  // console.log(target);

  // check years based on year range
  const milestoneArr = [
    [0, "Newlyweds"],
    [1, "Paper"],
    [5, "Wood"],
    [10, "Tin"],
    [25, "Silver"],
    [40, "Ruby"],
    [50, "Gold"],
    [60, "Diamond"],
    [70, "Platinum"],
  ];

  // return milestone
  for (let i = 0; i < milestoneArr.length; i++) {
    if (milestoneArr[i + 1]) {
      if (target >= milestoneArr[i][0] && target < milestoneArr[i + 1][0]) {
        console.log(milestoneArr[i][1]);

        return milestoneArr[i][1];
      }
    } else {
      return milestoneArr[i][1];
    }
  }
}
