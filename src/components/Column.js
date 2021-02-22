import React from 'react';

const Column=()=>{

    /* this throws warning
        return(
            <div>
                <td>
                    sunil
                </td>
                <td>
                    prajapat
                </td>
            </div>
        );
    */

   return(
    <React.Fragment>
        <td>
            sunil
        </td>
        <td>
            prajapat
        </td>
    </React.Fragment>
   );

}

export default Column;