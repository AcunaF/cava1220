import Link from "next/link"
export default function Wine (){
    const whiskies = [
        {
          type: "Malt",
          name: "Glenfiddich 15 años x 750 ml",
          description: "Whisky escocés de malta.",
          price: "$50",
        },
        {
          type: "Malt",
          name: "Glenfiddich 12 años x 750 ml",
          description: "Whisky escocés de malta.",
          price: "$45",
        },
        {
          type: "Malt",
          name: "Highland Park 12 años x 700 ml",
          description: "Whisky escocés de malta.",
          price: "$55",
        },
        {
          type: "Single Malt",
          name: "Jura Original 12 años Single malt x 700 ml",
          description: "Whisky de malta único.",
          price: "$60",
        },
        {
          type: "Single Malt",
          name: "BRUICHLADDICH CLASSIC LADDIE ESTUCHE X 700ml",
          description: "Whisky escocés suave y afrutado.",
          price: "$70",
        },
        {
          type: "Blend",
          name: "Jameson Irish Whiskey 700 ml",
          description: "Whisky irlandés suave.",
          price: "$40",
        },
        // Agrega más whiskies aquí según la lista
      ];
    return  (
    <div>
<br></br>
<table>
                <thead>
                  <tr>
                    <th>Cepa</th>
                    <th>Marca</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {whiskies.map((whisky, index) => (
                    <tr key={index}>
                      <td>{whisky.type}</td>
                      <td>{whisky.name}</td>
                      <td>{whisky.description}</td>
                      <td>{whisky.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
<button>
        <Link href="/distribuidora">
        Go back
        </Link>
      </button>
      </div>
    )

}