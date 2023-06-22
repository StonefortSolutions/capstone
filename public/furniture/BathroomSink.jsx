/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 bathroomSink.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/bathroomSink.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_bathroomSink.geometry} material={materials._defaultMat} />
      <mesh geometry={nodes.Mesh_bathroomSink_1.geometry} material={materials.metalLight} />
      <mesh geometry={nodes.Mesh_bathroomSink_2.geometry} material={materials.carpetWhite} />
    </group>
  )
}

useGLTF.preload('/bathroomSink.glb')
