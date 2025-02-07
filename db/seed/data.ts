import { EquipmentId, ExerciseId } from "@/lib/enums";
import {
    EquipmentReqModel,
    ExerciseEquipmentReqModel,
    TrainingSplitReqModel,
} from "../schema";
import { ExercisesReqModel } from "../schema/exercise";

const exerciseData: ExercisesReqModel[] = [
    // Strength - Push
    {
        id: 1,
        name: "Bench Press",
        description:
            "A compound push exercise for chest, shoulders, and triceps.",
        type: "strength",
        measurement: "reps",
        level: "intermediate",
        pushPull: "push",
    },
    {
        id: 2,
        name: "Overhead Press",
        description: "A shoulder press movement using a barbell or dumbbells.",
        type: "strength",
        measurement: "reps",
        level: "intermediate",
        pushPull: "push",
    },
    {
        id: 3,
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
        id: 4,
        name: "Pull-Ups",
        description: "A bodyweight pull movement for back and biceps.",
        type: "strength",
        measurement: "reps",
        level: "intermediate",
        pushPull: "pull",
    },
    {
        id: 5,
        name: "Barbell Row",
        description: "A compound back exercise using a barbell.",
        type: "strength",
        measurement: "reps",
        level: "intermediate",
        pushPull: "pull",
    },
    {
        id: 6,
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
        id: 7,
        name: "Squats",
        description: "A fundamental lower-body strength exercise.",
        type: "strength",
        measurement: "reps",
        level: "intermediate",
        pushPull: null,
    },
    {
        id: 8,
        name: "Lunges",
        description:
            "A unilateral leg exercise improving strength and balance.",
        type: "strength",
        measurement: "reps",
        level: "beginner",
        pushPull: null,
    },

    // Cardio
    {
        id: 9,
        name: "5km Jog",
        description: "A steady-paced run for endurance.",
        type: "cardio",
        measurement: "distance",
        level: "intermediate",
        pushPull: null,
    },
    {
        id: 10,
        name: "HIIT Sprints",
        description: "High-intensity interval sprints for conditioning.",
        type: "cardio",
        measurement: "time",
        level: "advanced",
        pushPull: null,
    },
    {
        id: 11,
        name: "Rowing Machine",
        description: "A full-body cardio workout on a rowing machine.",
        type: "cardio",
        measurement: "time",
        level: "beginner",
        pushPull: null,
    },

    // Balance & Flexibility
    {
        id: 12,
        name: "Yoga Flow",
        description: "A series of yoga poses for flexibility and relaxation.",
        type: "stretching",
        measurement: "time",
        level: "beginner",
        pushPull: null,
    },
    {
        id: 13,
        name: "Plank",
        description: "A core-strengthening isometric hold.",
        type: "balance",
        measurement: "time",
        level: "beginner",
        pushPull: null,
    },
    {
        id: 14,
        name: "Single-Leg Balance",
        description: "A stability exercise focusing on balance.",
        type: "balance",
        measurement: "time",
        level: "beginner",
        pushPull: null,
    },
];

const equipmentData: EquipmentReqModel[] = [
    { id: 1, name: "Dumbbells" },
    { id: 2, name: "Barbell" },
    { id: 3, name: "Kettlebell" },
    { id: 4, name: "Resistance Bands" },
    { id: 5, name: "Pull-up Bar" },
    { id: 6, name: "Treadmill" },
    { id: 7, name: "Stationary Bike" },
    { id: 8, name: "Jump Rope" },
    { id: 9, name: "Medicine Ball" },
    { id: 10, name: "Yoga Mat" },
    { id: 11, name: "Foam Roller" },
    { id: 12, name: "Cable Machine" },
    { id: 13, name: "Rowing Machine" },
    { id: 14, name: "Bench" },
    { id: 15, name: "Squat Rack" },
];

const trainingSplitData: TrainingSplitReqModel[] = [
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

const exerciseEquipmentData: ExerciseEquipmentReqModel[] = [
    // Strength - Push
    { exerciseId: ExerciseId.BenchPress, equipmentId: EquipmentId.Barbell },
    {
        exerciseId: ExerciseId.OverheadPress,
        equipmentId: EquipmentId.Barbell,
    },

    // Strength - Pull
    { exerciseId: ExerciseId.BarbellRow, equipmentId: EquipmentId.Barbell },
    { exerciseId: ExerciseId.Deadlift, equipmentId: EquipmentId.Barbell },

    // Strength - Legs
    { exerciseId: ExerciseId.Squats, equipmentId: EquipmentId.Barbell },

    // Cardio
    {
        exerciseId: ExerciseId.RowingMachine,
        equipmentId: EquipmentId.RowingMachine,
    },
];

export {
    exerciseData,
    equipmentData,
    trainingSplitData,
    exerciseEquipmentData,
};
