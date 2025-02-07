import { dbHttpInstance } from "./db"; // Your Drizzle database instance
import { exercises } from "./schema";
import { trainingSplits } from "./schema/training-split";

async function seedExercises() {
    const existingExercises = await dbHttpInstance.select().from(exercises);

    if (existingExercises.length > 0) {
        console.log("🛑Exercises already seeded.");
        return;
    }

    await dbHttpInstance.insert(exercises).values([
        // Strength - Push
        {
            name: "Bench Press",
            description:
                "A compound push exercise for chest, shoulders, and triceps.",
            type: "strength",
            measurement: "reps",
            level: "intermediate",
            pushPull: "push",
        },
        {
            name: "Overhead Press",
            description:
                "A shoulder press movement using a barbell or dumbbells.",
            type: "strength",
            measurement: "reps",
            level: "intermediate",
            pushPull: "push",
        },
        {
            name: "Push-Ups",
            description:
                "A bodyweight push exercise targeting the chest and triceps.",
            type: "strength",
            measurement: "reps",
            level: "beginner",
            pushPull: "push",
        },

        // Strength - Pull
        {
            name: "Pull-Ups",
            description: "A bodyweight pull movement for back and biceps.",
            type: "strength",
            measurement: "reps",
            level: "intermediate",
            pushPull: "pull",
        },
        {
            name: "Barbell Row",
            description: "A compound back exercise using a barbell.",
            type: "strength",
            measurement: "reps",
            level: "intermediate",
            pushPull: "pull",
        },
        {
            name: "Deadlift",
            description:
                "A full-body lift primarily targeting the posterior chain.",
            type: "strength",
            measurement: "reps",
            level: "advanced",
            pushPull: "pull",
        },

        // Strength - Legs
        {
            name: "Squats",
            description: "A fundamental lower-body strength exercise.",
            type: "strength",
            measurement: "reps",
            level: "intermediate",
            pushPull: "none",
        },
        {
            name: "Lunges",
            description:
                "A unilateral leg exercise improving strength and balance.",
            type: "strength",
            measurement: "reps",
            level: "beginner",
            pushPull: "none",
        },

        // Cardio
        {
            name: "5km Jog",
            description: "A steady-paced run for endurance.",
            type: "cardio",
            measurement: "distance",
            level: "intermediate",
            pushPull: "none",
        },
        {
            name: "HIIT Sprints",
            description: "High-intensity interval sprints for conditioning.",
            type: "cardio",
            measurement: "time",
            level: "advanced",
            pushPull: "none",
        },
        {
            name: "Rowing Machine",
            description: "A full-body cardio workout on a rowing machine.",
            type: "cardio",
            measurement: "time",
            level: "beginner",
            pushPull: "none",
        },

        // Balance & Flexibility
        {
            name: "Yoga Flow",
            description:
                "A series of yoga poses for flexibility and relaxation.",
            type: "stretching",
            measurement: "time",
            level: "beginner",
            pushPull: "none",
        },
        {
            name: "Plank",
            description: "A core-strengthening isometric hold.",
            type: "balance",
            measurement: "time",
            level: "beginner",
            pushPull: "none",
        },
        {
            name: "Single-Leg Balance",
            description: "A stability exercise focusing on balance.",
            type: "balance",
            measurement: "time",
            level: "beginner",
            pushPull: "none",
        },
    ]);

    console.log("🌱Exercises seeded successfully.");
}

async function seedSplits() {
    const seedData = [
        {
            name: "Full Body",
            sessionsPerWeek: 3,
            description: "Train the full body every session.",
        },
        {
            name: "Upper/Lower",
            sessionsPerWeek: 4,
            description: "Upper body on one day, lower body on another.",
        },
        {
            name: "Push/Pull/Legs",
            sessionsPerWeek: 3,
            description:
                "Push movements, pull movements, and legs on separate days.",
        },
        {
            name: "Push/Pull/Legs (6-day)",
            sessionsPerWeek: 6,
            description: "Same as PPL but six days per week for higher volume.",
        },
        {
            name: "Body Part Split",
            sessionsPerWeek: 5,
            description: "Each muscle group has its own dedicated day.",
        },
        {
            name: "Hybrid",
            sessionsPerWeek: 3,
            description: "Mix of strength, cardio, and flexibility training.",
        },
    ];

    const existingSplits = await dbHttpInstance.select().from(trainingSplits);

    if (existingSplits.length > 0) {
        console.log("🛑Training splits already seeded.");
        return;
    }

    await dbHttpInstance.insert(trainingSplits).values(seedData);
    console.log("🌱Exercises seeded successfully.");
}

seedSplits();
seedExercises();
