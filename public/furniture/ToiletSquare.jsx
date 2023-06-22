/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 toiletSquare.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/toiletSquare.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_toiletSquare.geometry} material={materials.carpetWhite} />
      <mesh geometry={nodes.Mesh_toiletSquare_1.geometry} material={materials.metalLight} />
      <mesh geometry={nodes.Group.geometry} material={materials.carpetWhite} position={[0.152, 0.228, -0.266]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  )
}

useGLTF.preload('/toiletSquare.glb')
