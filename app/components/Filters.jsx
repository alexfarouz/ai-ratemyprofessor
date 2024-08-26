'use client'
import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import TagSelector from './TagSelector';

const Filters = () => {
    const [difficultyRange, setDifficultyRange] = useState([1, 5]);
    const [ratingRange, setRatingRange] = useState([1, 5]);
    const [course, setCourse] = useState('')
    const [selectedTags, setSelectedTags] = useState([]);

    const tagOptions = [
      { value: 'easy-grader', label: 'Easy Grader' },
      { value: 'engaging', label: 'Engaging' },
      { value: 'strict', label: 'Strict' },
      { value: 'attendance-mandatory', label: 'Attendance Mandatory' },
      { value: 'accessible', label: 'Accessible' },
      // Add more tags as necessary
  ];

    const handleDifficultyChange = (newValue) => {
      setDifficultyRange(newValue);
    };

    const handleRatingChange = (newValue) => {
      setRatingRange(newValue);
    };

    const handleCourseChange = (newValue) => {
      setCourse(newValue);
    }

    const handleSelectTags = (newValue) => {
      setSelectedTags(newValue)
    }

    return (
        <Box className="p-4 border border-gray-300 rounded-lg bg-white">
            <Typography variant="h6" className="mb-4 text-black">Filter Professors</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Input
                        value={course}
                        onValueChange={handleCourseChange}
                        placeholder="Course" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <Input 
                        placeholder="Teaching Style" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography className="pb-3 text-black">Difficulty Level</Typography>
                    <Slider 
                        value={difficultyRange}
                        onValueChange={handleDifficultyChange}
                        min={1} 
                        max={5}
                        step={1}
                        className="w-full"
                    />
                    <Typography className="pt-3 text-black">
                      Selected {difficultyRange[0] === difficultyRange[1] ? `Difficulty: ${difficultyRange[0]}` : 
                        `Range: ${difficultyRange[0]} - ${difficultyRange[1]}`}
                    </Typography>
                </Grid>
                
                <Grid item xs={12} md={6} className="flex items-center">
                    <Input 
                        placeholder="Availability Outside Class" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography className="pb-3 text-black">Rating</Typography>
                    <Slider 
                        value={ratingRange}
                        onValueChange={handleRatingChange}
                        min={1}
                        max={5}
                        step={1}
                        className="w-full"
                    />
                    <Typography className="pt-3 text-black">
                        Selected {ratingRange[0]===ratingRange[1] ? `Rating: ${ratingRange[0]}` : 
                          `Range: ${ratingRange[0]} - ${ratingRange[1]}`}
                    </Typography>
                    
                </Grid>
                <Grid item xs={12} md={6} className="flex items-center">
                    <TagSelector options={tagOptions} onSelectTags={handleSelectTags}/>
                </Grid>
                <Grid item xs={12} md={6} className="flex items-center justify-end mt-4">
                    <Button
                        href="#" 
                        className="text-white bg-black hover:bg-[#333] text-sm">
                        Apply
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Filters;
