import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function MovieUsers() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get('http://localhost:5050/users').then((res) => res.data),
      })
    
      if (isPending) {
        return <span>Loading...</span>
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>
      }
        
    return (
        <div>
        <h1>Movie Users</h1>
        <h2>Total Users: {data.length}</h2>
        {data.map((user: { _id: string; name: string; email: string; phone: string }) => (
            <div key={user._id}>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
        ))}
        </div>
    );
}