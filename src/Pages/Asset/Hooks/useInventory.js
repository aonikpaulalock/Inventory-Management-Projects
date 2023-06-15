import { useEffect, useState } from "react"

function useInventory() {

  const [inventorys, setInventorys] = useState([])

  useEffect(() => {
    fetch("https://inventory-update-server.vercel.app/inventorys")
      .then(res => res.json())
      .then(data => {
        setInventorys(data)
      })
  }, [])

  return [inventorys, setInventorys]
}
export default useInventory ;
