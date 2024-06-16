import { useEffect, useState } from "react"

function useInventory() {
  const [inventorys, setInventorys] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch("https://inventory-update-server.vercel.app/inventorys")
      .then(res => res.json())
      .then(data => {
        setInventorys(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  return [inventorys, loading, setInventorys]
}

export default useInventory;