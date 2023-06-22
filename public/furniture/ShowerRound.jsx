/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 showerRound.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/showerRound.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_showerRound.geometry} material={materials._defaultMat} />
      <mesh geometry={nodes.Mesh_showerRound_1.geometry} material={materials.metalDark} />
      <mesh geometry={nodes.doorLeft.geometry} material={materials.glass} position={[0, 0.123, -0.535]} />
      <mesh geometry={nodes.doorRight.geometry} material={materials.glass} position={[0.535, 0.123, 0]} />
      <mesh geometry={nodes.faucet.geometry} material={materials.carpetWhite} position={[0.28, 0.437, -0.449]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  )
}

useGLTF.preload('/showerRound.glb')
