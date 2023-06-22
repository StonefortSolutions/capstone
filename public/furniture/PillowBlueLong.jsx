/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 pillowBlueLong.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/pillowBlueLong.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['pillowBlueLong(Clone)'].geometry} material={materials.carpetBlue} />
    </group>
  )
}

useGLTF.preload('/pillowBlueLong.glb')
