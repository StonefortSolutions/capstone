/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 cabinetTelevisionDoors.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/cabinetTelevisionDoors.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['cabinetTelevisionDoors(Clone)'].geometry} material={materials.wood}>
        <group position={[0.04, 0.08, -0.02]}>
          <mesh geometry={nodes.Mesh_doorLeft.geometry} material={materials.wood} />
          <mesh geometry={nodes.Mesh_doorLeft_1.geometry} material={materials.metal} />
        </group>
        <group position={[0.76, 0.08, -0.02]}>
          <mesh geometry={nodes.Mesh_doorRight.geometry} material={materials.metal} />
          <mesh geometry={nodes.Mesh_doorRight_1.geometry} material={materials.wood} />
        </group>
      </mesh>
    </group>
  )
}

useGLTF.preload('/cabinetTelevisionDoors.glb')
