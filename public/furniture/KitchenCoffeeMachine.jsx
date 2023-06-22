/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 kitchenCoffeeMachine.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/kitchenCoffeeMachine.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={[0.79, 0.585, 0.79]}>
        <mesh geometry={nodes.Mesh_kitchenCoffeeMachine.geometry} material={materials.metalMedium} />
        <mesh geometry={nodes.Mesh_kitchenCoffeeMachine_1.geometry} material={materials.metal} />
        <mesh geometry={nodes.mug.geometry} material={materials.carpetWhite} position={[0.115, 0.06, -0.097]} scale={[1.266, 1.709, 1.266]} />
      </group>
    </group>
  )
}

useGLTF.preload('/kitchenCoffeeMachine.glb')
