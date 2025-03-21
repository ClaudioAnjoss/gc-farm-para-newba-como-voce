import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { characters } from './data'
import iPersonagem from './iTypes'
import { Button } from '../ui/button'

export default function TableGC() {
  // const [data, setData] = useState<iPersonagem[]>(characters || [])

  const [data, setData] = useState<iPersonagem[]>(() => {
    // Verificar se já existem dados no localStorage
    const storedData = localStorage.getItem('characters')
    if (storedData) {
      return JSON.parse(storedData)
    }
    return characters // Caso não haja dados, usar o valor inicial
  })

  console.log(data)

  const handleStarClick = (
    personagemId: number,
    missaoId: number,
    index: number,
  ) => {
    setData((prevData) =>
      prevData.map((personagem) => {
        if (personagem.id === personagemId) {
          // Encontrando a missão dentro do personagem
          const updatedMissoes = personagem.missoes.map((missoes) => {
            if (missoes.id === missaoId) {
              // Atualizando o status da ida
              const updatedIdas = [...missoes.idas]
              updatedIdas[index] = !updatedIdas[index] // Alternando entre true e false
              return { ...missoes, idas: updatedIdas }
            }
            return missoes
          })
          return { ...personagem, missoes: updatedMissoes }
        }
        return personagem
      }),
    )
  }

  useEffect(() => {
    localStorage.setItem('characters', JSON.stringify(data))
  }, [data])

  return (
    <>
      <Table className="w-full bg-blue-50 border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <TableCaption className="text-xl font-semibold text-center text-gray-800 py-3">
          Danillo noob.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead
              className="text-center text-lg font-bold bg-blue-200 py-2"
              colSpan={5}
            >
              Desafios
            </TableHead>
            {data.length > 0 &&
              data[0].missoes.map(({ id, nome, imagem }) => (
                <TableHead key={id} className="text-center p-2 space-y-2">
                  <Avatar className="border border-blue-300 mx-auto">
                    <AvatarImage src={imagem} alt={nome} />
                    <AvatarFallback>{nome}</AvatarFallback>
                  </Avatar>
                  <span className="block text-sm text-gray-700">{nome}</span>
                </TableHead>
              ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(({ id, nome, imagem, missoes }) => (
            <TableRow
              key={id}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <TableCell
                className="font-medium justify-center text-gray-700 py-3"
                colSpan={5}
              >
                <div className="flex flex-col items-center">
                  <Avatar className="mb-2">
                    <AvatarImage src={imagem} alt={nome} />
                    <AvatarFallback>{nome}</AvatarFallback>
                  </Avatar>
                  <span className="text-md font-semibold text-gray-800">
                    {nome}
                  </span>
                </div>
              </TableCell>
              {missoes.map(({ id: missaoId, idas }) => (
                <TableCell
                  key={missaoId}
                  className="text-center py-2 border border-x-blue-100"
                >
                  {idas.map((concluida, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`cursor-pointer transition-colors duration-300 ${concluida ? 'text-yellow-400' : 'text-gray-400'}`}
                      onClick={() => handleStarClick(id, missaoId, index)} // Chama a função de click para alternar o estado
                    >
                      {concluida ? (
                        <FaStar className="text-yellow-400" />
                      ) : (
                        <FaRegStar className="text-gray-400" />
                      )}
                    </Button>
                  ))}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* <Table className="w-full bg-blue-300-400">
      <TableCaption>Danillo noob.</TableCaption>
      <TableHeader className=" ">
        <TableRow className="">
          <TableHead className="text-center" colSpan={5}></TableHead>
          {data.length > 0 &&
            data[0].missoes.map(({ id, nome, imagem }) => (
              <TableHead key={id} className="text-center p-1 ">
                <Avatar className="border mx-auto">
                  <AvatarImage src={imagem} alt={nome} />
                  <AvatarFallback>{nome}</AvatarFallback>
                </Avatar>
                <span>{nome}</span>
              </TableHead>
            ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(({ id, nome, imagem, missoes }) => (
          <TableRow key={id} className="">
            <TableCell className="font-medium justify-end " colSpan={5}>
              <div className="flex flex-col items-center w-1/2">
                <Avatar>
                  <AvatarImage src={imagem} alt={nome} />
                  <AvatarFallback>{nome}</AvatarFallback>
                </Avatar>
                <span>{nome}</span>
              </div>
            </TableCell>
            {missoes.map(({ id: missaoId, idas }) => (
              <TableCell key={missaoId} className="text-center  ">
                {idas.map((concluida, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`cursor-pointer ${concluida ? 'text-yellow-400' : 'text-gray-400'}`}
                    onClick={() => handleStarClick(id, missaoId, index)} // Chama a função de click para alternar o estado
                  >
                    {concluida ? <FaStar /> : <FaRegStar />}
                  </Button>
                ))}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table> */}
    </>
  )
}
