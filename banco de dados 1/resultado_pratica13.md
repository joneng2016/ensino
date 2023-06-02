```
explain select * from city where city_id  in (
	select  city_id from address where address_id in (
		select address_id from customer c where customer_id in (
			select customer_id  from rental where inventory_id in (
				select inventory_id from inventory where film_id in (
					select film_id from film where film_id  in (
						select film_id from film_actor fa where actor_id in (
							select 
								actor_id 
							from 
								actor a 
							where 
								first_name = "KEVIN" and
								last_name = "BLOOM"
						)
					)
				)
			)
		)
	)
) limit 3 
offset 3;
```
