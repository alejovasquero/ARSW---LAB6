/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.cinema.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import edu.eci.arsw.cinema.model.Cinema;
import edu.eci.arsw.cinema.model.CinemaFunction;
import edu.eci.arsw.cinema.model.Movie;
import edu.eci.arsw.cinema.persistence.CinemaPersistenceException;
import edu.eci.arsw.cinema.persistence.impl.InMemoryCinemaPersistence;

/**
 *
 * @author cristian
 */
//@RunWith(SpringRunner.class)
//@SpringBootTest()
public class ApplicationServicesTest {
    @Test
    public void contextLoads() {
    }

    @Test
    public void getFunctionsbyCinemaAndDateTest() {
        InMemoryCinemaPersistence ipct=new InMemoryCinemaPersistence();
        String functionDate = "2020-12-11 15:00";
        String functionDate2 = "2020-12-11 14:00";
        List<CinemaFunction> functions1= new ArrayList<>();
        CinemaFunction funct1 = new CinemaFunction(new Movie("Fast","Action"),functionDate);
        CinemaFunction funct2 = new CinemaFunction(new Movie("IT","Horror"),functionDate);
        functions1.add(funct1);
        functions1.add(funct2);

        List<CinemaFunction> functions2= new ArrayList<>();
        CinemaFunction funct12 = new CinemaFunction(new Movie("Fast","Action"),functionDate2);
        CinemaFunction funct22 = new CinemaFunction(new Movie("IT","Horror"),functionDate2);
        functions2.add(funct12);
        functions2.add(funct22);
        Cinema c=new Cinema("Cine Colombia 22",functions1);
        Cinema c2=new Cinema("Cine tar",functions2);
        try {
            ipct.saveCinema(c);
            ipct.saveCinema(c2);
            List<CinemaFunction> lis = ipct.getFunctionsbyCinemaAndDate(c.getName(), functionDate);
            assertEquals(lis.size(), 2);
            assertEquals(lis.get(0), funct1);
            assertEquals(lis.get(1), funct2);
        } catch (CinemaPersistenceException e) {
            fail("Cinema persistence failed when consulting cinemas.");
        }

    }
}
