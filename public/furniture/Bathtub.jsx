/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 bathtub.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/bathtub.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_bathtub.geometry} material={materials.carpetWhite} />
      <mesh geometry={nodes.Mesh_bathtub_1.geometry} material={materials.metalLight} />
      <mesh geometry={nodes.Mesh_bathtub_2.geometry} material={materials.metalDark} />
    </group>
  )
}

useGLTF.preload('/bathtub.glb')
