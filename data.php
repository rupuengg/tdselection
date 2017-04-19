<?php
	$a = array(
		array(
			'id' => '1',
			'firstname' => 'Amit',
			'lastname' => 'Sharma',
			'email' => 'amit.sharma@gmail.com',
			'phone' => '1234567890',
			'status' => 'active'
		),array(
			'id' => '2',
			'firstname' => 'Babloo',
			'lastname' => 'Sharma',
			'email' => 'babloo.sharma@gmail.com',
			'phone' => '1234567890',
			'status' => 'active'
		),array(
			'id' => '3',
			'firstname' => 'Dharmender',
			'lastname' => 'Singh',
			'email' => 'dharmender.singh@gmail.com',
			'phone' => '1234567890',
			'status' => 'active'
		),array(
			'id' => '4',
			'firstname' => 'Kamal',
			'lastname' => 'Singh',
			'email' => 'kamal.singh@gmail.com',
			'phone' => '1234567890',
			'status' => 'active'
		),array(
			'id' => '5',
			'firstname' => 'Ravi',
			'lastname' => 'Kant',
			'email' => 'ravi.kant@gmail.com',
			'phone' => '1234567890',
			'status' => 'active'
		)
	);
	
	echo json_encode($a);