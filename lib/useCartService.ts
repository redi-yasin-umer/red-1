import { persist } from 'zustand/middleware'
   export const cartStore = create<Cart>()(
     persist(() => initialState, {
       name: 'cartStore',
     })
   )
   decrease: (item: OrderItem) => {
    const exist = items.find(
      (x) =>
        x.slug === item.slug
    )
    if (!exist) return
    const updatedCartItems =
      exist.qty === 1
        ? items.filter((x: OrderItem) => x.slug !== item.slug)
        : items.map((x) =>
            item.slug
              ? { ...exist, qty: exist.qty - 1 }
              : x
          )

    const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
      calcPrice(updatedCartItems)
    cartStore.setState({
      items: updatedCartItems,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    })
  },