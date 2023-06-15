import { useEffect, useState } from "react"

function useInventory() {

  const [inventorys, setInventorys] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/inventorys")
      .then(res => res.json())
      .then(data => {
        setInventorys(data)
      })
  }, [])

  return [inventorys, setInventorys]
}
export default useInventory ;
