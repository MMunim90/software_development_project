const friends = [
    "Rahim", "Karim", "Hasan", "Hossain", "Sakib",
    "Tamim", "Mahmud", "Nayeem", "Rafi", "Shuvo",
    "Ayesha", "Fatema", "Nusrat", "Sumaiya", "Jannat",
    "Mim", "Tania", "Rima", "Farzana", "Ritu",
    "Imran", "Arif", "Rakib", "Shamim", "Mehedi",
    "Nafis", "Sadia", "Nabila", "Tanvir", "Adnan", "MD. SHAHAN AL MUNIM"
]

const checkFriends = (friends=[]) => {
    let biggestName = friends[0];

    for(let i=1; i<friends.length; i++){
        const friend = friends[i];

        if(friend.length > biggestName.length){
            biggestName = friend;
        }
    }

    return biggestName;
}

const bigFriends = checkFriends(friends);
console.log(bigFriends);