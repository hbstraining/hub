import db from '../database/db';

export default {
  fetchAllCourses ({ state, commit }) {
    console.log( `🔥‍ fetching courses` );

    return new Promise(( resolve, reject ) => {
      db.collection( 'courses' ).onSnapshot( querySnapshot => {
        const courses = querySnapshot.docs;

        courses.sort(( a, b ) => {
          return b.data().order < a.data().order;
        });

        courses.forEach(( course, index ) => {
          commit( 'setItem', { resource: 'courses', id: index, item: course.data() });
        });

        resolve( Object.values( state.courses ));
      });
    });
  }
};
