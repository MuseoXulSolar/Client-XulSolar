import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { filterUserByEmail } from '../../redux/actions/actions'

import { Card, Text, Metric, Button } from "@tremor/react";

const UserCard = ({ user }) => {

    const { email, name, id} = user; 
  
    const dispatch = useDispatch();

   function handleFilterClick(){

       dispatch(filterUserByEmail(email))
   }
    

    return (

        <div>
            <Card className="max-w-lg mt-10 mx-auto mb-5 font-bold">
                <div className="flex flex-row">
                    <div className="mr-10">
                        <Text>{email}</Text>
                        <Metric>{name}</Metric>
                    </div>

                    <div className="flex flex-col ml-auto mr-2">
                        <Button onClick={handleFilterClick} className="max-h-10 mt-auto my-1 hover:bg-gray-600">Ver Usuario</Button>
                        <Button className="max-h-10 mt-auto my-1 hover:bg-gray-600">Bloquear</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default UserCard;