import db from '../database/db';

export default {
  fetchAllClasses ({ state, commit }) {

    console.log( `🔥‍ fetching classes` );

    return new Promise(( resolve, reject ) => {

      db.collection( 'classes' ).onSnapshot( querySnapshot => {
        const classesArray = querySnapshot.docs[ 0 ].data().modules;

        classesArray.forEach( ( newClass, index ) => {
          commit( 'setItem', { resource: 'classes', id: index, item: newClass });
        });

        resolve( Object.values( state.classes ));
      });
    });
  }
};