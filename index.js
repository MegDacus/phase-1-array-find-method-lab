// code your solution here
function superbowlWin (array) {
    for (const element of array) {
        if (element['result']=== 'W') {
            return element['year']
        }
    }
    return undefined
}
