/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 floorCorner.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/floorCorner.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['floorCorner(Clone)'].geometry} material={materials.wood} />
    </group>
  )
}

useGLTF.preload('/floorCorner.glb')
