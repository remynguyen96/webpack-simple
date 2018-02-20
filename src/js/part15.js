// @flow
import { fromJS } from 'immutable';

const object = fromJS({
    class1: {
        studen1: 'John',
        studen2: 'Remy',
        studen3: 'Jana',
        studen4: 'Zack',
    },
    class2: 'No Students',
    class3: {
        studen5: 'Kichky',
        studen6: 'RickKy',
        studen7: 'ZachKy',
    },
});


// const test = object.set('class1', ["stresssout, heaven"]);
// const test = object.clear();
// const test = object.update('class1', value => {
//     const result = {...value.toJS(), studen5: 'Zackma'};
//     return result;
// });
// const test = object.setIn(['class1', 'studen1'], ["stresssout, heaven"]);
// const test = object.reverse();
// const test = object.sort(() => 1);
// const test = object.hashCode();
// const test = object.has('class3');
// const test = object.includes('No Students');
// const test = object.rest();
// console.log(test);
// console.log(test.toJS());
// console.log(JSON.stringify(test, null, 2));

